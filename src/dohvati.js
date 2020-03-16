import listing from './lista'

let doh = (req, res) => {
    res.json(listing.listing.join(' '))
};

export default { doh }