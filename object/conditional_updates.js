// Imagine the user decides to toggle their auto-renewal off. Write a function toggleAutoRenew(dataset) that returns a new object with the autoRenew property flipped, ensuring you don't mutate the original dataset.

const run = (n) => {
    try {
        return {
            ...n,
            subscription: {
                ...n.subscription,
                autoRenew: !n.subscription.autoRenew
            }
        }
    } catch (err) {
        console.error(err)
    }
}


const userDataset = {
    id: "usr_94821",
    profile: {
        firstName: "Arjun",
        lastName: "Sharma",
        country: "India",
        authMethod: "Google",
    },
    subscription: {
        plan: null,
        status: "active",
        billingCycle: "annual",
        priceInINR: 4999,
        autoRenew: true,
    },
    metrics: {
        imagesGenerated: 1420,
        videosRendered: 45,
        storageUsedInGB: 12.5,
        lastActive: "2026-06-02T10:15:30Z",
    },
    campaignPreferences: ["seo_organic", "ppc_google_ads", "email_onboarding"],
};

console.log('userDataset', userDataset)

