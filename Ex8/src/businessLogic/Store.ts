import {action, computed, observable} from "mobx";

export class Store {
    @observable loading: boolean;
    @observable gifs: { title: string, url: string }[];
    @observable currentPage: number;
    @observable totalPages: number;
    @observable screen: string;
    @observable searchString: string;
    @observable error: boolean;

    constructor() {
        this.error = false;
        this.searchString = '';
        this.loading = false;
        this.gifs = [];
        this.currentPage = 0;
        this.totalPages = 0;
        this.screen = 'Trending'
    }

    /**
     * Fetch with the correct URL based on the screen
     */
    @action fetch(): void {
        let url;
        if (this.screen !== 'Trending') {
            if (!this.searchString) {
                return; // Don't fetch if the search field is empty
            }
            url = `https://api.giphy.com/v1/gifs/search?api_key=kn71mgUatXNYkXv8boMUQDeUsF5kgACG&limit=12&offset=${this.currentPage * 12}&q=${this.searchString}`
        } else {
            url = `https://api.giphy.com/v1/gifs/trending?api_key=kn71mgUatXNYkXv8boMUQDeUsF5kgACG&limit=12&offset=${this.currentPage * 12}`
        }

        this.error = false;
        this.loading = true;
        console.log('fetch');
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.gifs = json.data.map(item => {
                    return {
                        url: item.images.fixed_height.url,
                        title: item.title
                    }
                });

                // The gif total is divided by 12 as each page has 12 gifs
                let total = json.pagination.total_count;
                if (total % 12 > 0) {
                    // Add a page if the last page has less than 12 gifs
                    this.totalPages = parseInt((total / 12 + 1).toFixed(0));
                } else {
                    this.totalPages = parseInt((total / 12).toFixed(0));
                }
                this.loading = false;
            })
            .catch(error => {
                this.error = true;
                this.reset();
                console.log(error);
            });
    }

    /**
     * Computes the correct page number for the page text field
     */
    @computed get getCurrentPage(): string {
        if (this.totalPages <= 0) {
            return (0).toString();
        } else if (this.currentPage === -1) {
            return '';
        } else {
            return (this.currentPage + 1).toString();
        }
    }

    @action setCurrentPage(page: number): void {
        if (this.currentPage !== page && this.totalPages >= page) {
            this.currentPage = page;
        }
    }

    @action search(input: string): void {
        this.reset();
        this.searchString = input;
        this.fetch()
    }

    @action setScreen(screen: string): void {
        if (this.screen !== screen) {
            this.reset();
            this.screen = screen;
        }
    }

    reset(): void {
        this.currentPage = 0;
        this.totalPages = 0;
        this.gifs = [];
    }
}


