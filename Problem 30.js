const user = {
    profile: null
};

const city = user?.profile?.address?.city ?? "Unknown";

console.log("City:", city);