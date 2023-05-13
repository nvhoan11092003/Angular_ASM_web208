interface attribute {
    code: string;
    name: string;
    value: string;
}

interface brand {
    id: number;
    name: string;
    slug: string;
}

interface image {
    base_url: string;
    is_gallery: true;
    label: null;
    large_url: string;
    medium_url: string;
    position: null;
    small_url: string;
    thumbnail_url: string;
}

interface product {
    id: number;
    name: string;
    price: number;
    original_price: number;
    description: string;
    images: image[];
    brand: brand;
    specifications: [
        {
            name: string;
            attributes: [attribute];
        }
    ];
}
