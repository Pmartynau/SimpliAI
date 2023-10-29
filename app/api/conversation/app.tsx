async function main() {
    await new Promise<void>(resolve => {
        setTimeout(()=> {
            console.log('hello');
            resolve();
        }, 1000)
    })
    console.log('world')
}

main()