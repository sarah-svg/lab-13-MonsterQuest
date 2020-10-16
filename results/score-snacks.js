function scoreScoobySnacks(scoobySnacks) {
    if (scoobySnacks === 0) {
        return 'poor';   
    }
    else if (scoobySnacks < 50) {
        return 'modest';   
    }
    return 'rich';
}

export default scoreScoobySnacks;