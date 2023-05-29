function fetchImages(name) {
    const apiKey = '36027654-0445d5372370fb7cb2fc02c29';
    
    return fetch(`https://pixabay.com/api/?q=${name}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(
                new Error(`No images found for '${name}'`),
            );
        })
}

const api = {
    fetchImages,
};

export default api;