import bcrypt from 'bcrypt';
import { redirect } from '@sveltejs/kit';

const PASSWORD_HASH = '$2b$10$WFTaM7eL3ujdR1s40b4nKu.EVGSe/SuvHw6WzI31NJR77a41raenu';
export async function handle({ event, resolve }) {
    const { cookies, url } = event;
    const isAuthenticated = cookies.get('authenticated') === 'true';

    // Redirect to login if not authenticated and trying to access a restricted page
    if (!isAuthenticated && url.pathname !== '/login') {
        throw redirect(302, '/login');
    }

    // Process the request as usual if authenticated or accessing the login page
    return await resolve(event);
}
