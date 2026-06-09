// Write a function that takes the metrics sub-object and returns a new object containing only the metrics that have numeric values greater than 20. (For example, storageUsedInGB is 12.5, so it should be excluded).

const run = (n) => {
    try {
        return Object.fromEntries(
            Object.entries(n.metrics ?? {})
                .filter(([_, value]) => typeof value === 'number' && value > 20)
        )
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
        imagesGenerated: 1421,
        videosRendered: 46,
        storageUsedInGB: 12.5,
        lastActive: "2026-06-02T10:15:30Z",
    },
    campaignPreferences: ["seo_organic", "ppc_google_ads", "email_onboarding"],
};

console.log(run(userDataset))
