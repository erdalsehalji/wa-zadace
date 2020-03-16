import listing from './lista'

let dod = (req, res) => {
    let b = Math.floor(Math.random() * 100) +1
    listing.listing.push(b)
    res.json(listing)
};

export default { dod }