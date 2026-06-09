// Write a function that extracts the user's full name (firstName + lastName) and their current subscription plan. If the subscription plan is missing, it should default to "Free Tier".

const run = (n) => {
    try {
        const { firstName, lastName } = n.profile ?? {}
        const plan = n.subscription?.subscription ?? 'Free Tier'
        return {
            fullName: `${firstName} ${lastName}`,
            plan
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

