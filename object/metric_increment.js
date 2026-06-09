// Every time a user generates content, their metrics need to tick up. Write a function incrementMetric(dataset, metricName, amount) that dynamically updates a specific key inside the metrics object (e.g., adding 1 to imagesGenerated).

const run = (n, metricName, amount) => {
    try {
        return {
            ...n,
            metrics: {
                ...n.metrics,
                [metricName]: (n.metrics?.[metricName] ?? 0) + amount
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
        imagesGenerated: 1421,
        videosRendered: 45,
        storageUsedInGB: 12.5,
        lastActive: "2026-06-02T10:15:30Z",
    },
    campaignPreferences: ["seo_organic", "ppc_google_ads", "email_onboarding"],
};

console.log(run(userDataset, "videoDownloaded", 5))
