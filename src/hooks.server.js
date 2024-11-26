import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

const PASSWORD_HASH = '$2b$10$WFTaM7eL3ujdR1s40b4nKu.EVGSe/SuvHw6WzI31NJR77a41raenu';

export async function handle({ event, resolve }) {
    const { cookies, url, request } = event;
    // Get the Host header
    const host = request.headers.get('host');

    // Redirect `journal.mysite.com` to `mysite.com`
    if (host === 'journal.battogtokh.works') {
        throw redirect(302, 'https://battogtokh.works');
    }

    // Handle authentication
    const isAuthenticated = cookies.get('authenticated') === 'true';
    if (isAuthenticated && url.pathname === '/login') {
        throw redirect(302, '/');
    }

    if (!isAuthenticated && url.pathname !== '/login') {
        throw redirect(302, '/login');
    }

    // Proceed with the request
    return await resolve(event);
}
