async function getPets () {
    const { animals } = await pet.animals({
        location,
        breed,
        type: animal
    })

    setPets(animals || [])
}