
export interface BreedListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:   SmallBreed[];
}

export interface SmallBreed {
    name: string;
    description:  string;
    id:   number;
    reference_image_id?: string;
}