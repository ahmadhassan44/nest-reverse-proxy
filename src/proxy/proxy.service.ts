import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import { Request, Response } from 'express';

// Interface for our proxy route configuration
interface ProxyRoute {
  domain: string;
  target: string;
  pathRewrite?: { [key: string]: string };
}

@Injectable()
export class ProxyService implements OnModuleInit {
  private readonly logger = new Logger(ProxyService.name);
  private proxyMiddleware: RequestHandler;
  
  // Configuration for our microservices
  private readonly proxyRoutes: ProxyRoute[] = [
    {
      domain: 'blog.localhost',
      target: 'http://blog-service:3000',  // This will be our Docker service name
    },
    {
      domain: 'payment.localhost',
      target: 'http://payment-service:3000',
    },
    {
      domain: 'shop.localhost',
      target: 'http://shop-service:3000',
    },
  ];

  onModuleInit() {
    this.setupProxy();
    this.logger.log('Proxy service initialized with routes:');
    this.proxyRoutes.forEach(route => {
      this.logger.log(`${route.domain} → ${route.target}`);
    });
  }

  private setupProxy() {
    this.proxyMiddleware = createProxyMiddleware({
      router: (req) => {
        const host = req.headers.host;
        const route = this.proxyRoutes.find(r => host?.includes(r.domain));
        
        if (!route) {
          this.logger.error(`No route found for host: ${host}`);
          throw new Error(`No route found for host: ${host}`);
        }
        
        this.logger.debug(`Routing ${host} to ${route.target}`);
        return route.target;
      },
      changeOrigin: true,
      ws: true, // Enable WebSocket proxy
    });
  }

  // Method to handle incoming requests
  async handleRequest(req: Request, res: Response) {
    this.logger.debug(`Incoming request: ${req.method} ${req.headers.host}${req.url}`);
    
    return this.proxyMiddleware(req, res, (err) => {
      if (err) {
        this.logger.error('Proxy error:', err);
        res.status(500).send('Proxy error occurred');
      }
    });
  }
}
