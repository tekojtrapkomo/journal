import bcrypt from 'bcrypt';
import { redirect } from '@sveltejs/kit';
import { PASSWORD_HASH } from '$env/static/private';

const HASH = PASSWORD_HASH
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
