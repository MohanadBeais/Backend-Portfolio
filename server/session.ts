import session from 'express-session';
import MemoryStore from 'memorystore';
import {Express} from 'express';

const MemoryStoreSession = MemoryStore(session);

export function configureSession(app: Express) {
    app.use(session({
        secret: process.env.SESSION_SECRET || 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        store: new MemoryStoreSession({
            checkPeriod: 86400000 // prune expired entries every 24h
        }),
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }
    }));
} 