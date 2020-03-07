export const getSortedName = users => {
    if (!users || !users.length) {
        return [];
    }

    return users.sort((a, b) => {
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
        } else if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
        }

        return 0;
    });
};