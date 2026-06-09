// In data analytics, nested objects are often flattened into a single level of key-value pairs separated by dots. Write a function flattenObject(dataset) that turns the nested userDataset into a flat structure like this:

// {
//   "id": "usr_94821",
//   "profile.firstName": "Arjun",
//   "profile.country": "India",
//   "subscription.plan": "Premium Tier",
//   // ...and so on
// }

const run = (n) => {
    try {
        let flattenedObj = {}
        let stack = Object.entries(n).reverse()
        const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value)
        while (stack.length) {
            const [key, value] = stack.pop()
            if (isObject(value)) {
                const nestedEntries = Object.entries(value)
                for (let i = nestedEntries.length - 1; i >= 0; i--) {
                    const [nestedKey, nestedValue] = nestedEntries[i]
                    stack.push([`${key}.${nestedKey}`, nestedValue])
                }
            } else {
                flattenedObj[key] = value
            }
        }
        return flattenedObj
    } catch (err) {
        console.error(err)
    }
}

// stack - [[profile, {...}], [id, value]], falttened - {"id": value}
// stack - [..., ["profile.firstName", value]],  falttened - {"id": value}
// stack - [...], flattened - {"id": value, "profile.firstName": value}
// ...


const userDataset = {
    id: "usr_94821",
    profile: {
        firstName: "Arjun",
        lastName: "Sharma",
        country: "India",
        authMethod: "Google",
        deeplyNestedObj: {
            moreDeeplyNestedObject: {
                test: 'done'
            }
        }
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
