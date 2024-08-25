import { Locations } from '$lib/db/models/locations.model';
import { Users } from '$lib/db/models/users.model';
import { Items } from '$lib/db/models/items.model';

export async function load() {
    try {
        const locations = await Locations.findAll({
            include: [
                { model: Users, as: 'user', attributes: ['nom', 'prenom'] },
                { model: Items, as: 'item', attributes: ['nom'] }
            ]
        });


        const serializedLocations = locations.map(location => location.toJSON());

        return { locations: serializedLocations };
    } catch (error) {
        console.error('Error fetching locations:', error);
        return { locations: [] };
    }
}
