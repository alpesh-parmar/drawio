var dnsLocalStorage
function doThingsWithCookies() {
    console.log(`DNS Data js: `, document.cookie)

    document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
    console.log(`DNS Data js: `, handle.localStorage.getItem("currentUser"))
    dnsLocalStorage = handle.localStorage
    handle.localStorage.setItem("foo", "bar") // set a local storage key
}

async function handleCookieAccess() {
    if (!document.hasStorageAccess) {
        // This browser doesn't support the Storage Access API
        // so let's just hope we have access!
        doThingsWithCookies()
    } else {
        const hasAccess = await document.hasStorageAccess()
        console.log("Check access: ",hasAccess);
        
        if (hasAccess) {
            // We have access to third-party cookies, so let's go
            doThingsWithCookies()
            // If we want to modify unpartitioned state, we need to request a handle.
            const handle = await document.requestStorageAccess({
                localStorage: true,
            })
            doThingsWithLocalStorage(handle)
        } else {
            // Check whether third-party cookie access has been granted
            // to another same-site embed
            try {
                const permission = await navigator.permissions.query({
                    name: "storage-access",
                })
                console.log(permission);

                if (permission.state === "granted") {
                    // If so, you can just call requestStorageAccess() without a user interaction,
                    // and it will resolve automatically.
                    const handle = await document.requestStorageAccess({
                        cookies: true,
                        localStorage: true,
                    })
                    doThingsWithLocalStorage(handle)
                    doThingsWithCookies()
                } else if (permission.state === "prompt") {
                    // Need to call requestStorageAccess() after a user interaction
                    btn.addEventListener("click", async () => {
                        try {
                            const handle = await document.requestStorageAccess({
                                cookies: true,
                                localStorage: true,
                            })
                            doThingsWithLocalStorage(handle)
                            doThingsWithCookies()
                        } catch (err) {
                            // If there is an error obtaining storage access.
                            console.error(`Error obtaining storage access: ${err}.
                              Please sign in.`)
                        }
                    })
                } else if (permission.state === "denied") {
                    console.error("Permission not given")
                    // User has denied third-party cookie access, so we'll
                    // need to do something else
                }
            } catch (error) {
                console.error(`Could not access permission state. Error: ${error}`)
                doThingsWithCookies() // Again, we'll have to hope we have access!
            }
        }
    }
}
await handleCookieAccess()