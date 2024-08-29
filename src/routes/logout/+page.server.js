import { redirect } from "@sveltejs/kit";

export const load = async () => {
    throw redirect (302, "/");
};

//forcer la session a expirer 
export const actions = {
    default: async ({ cookies }) => {
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })
    }
};
