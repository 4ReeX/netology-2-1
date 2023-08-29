export interface Project {
    img: string;
    category: string;
}

export interface ProjectListProps {
    projects: Project[];
}
export interface ToolbarProps {
    filters: string[];
    selected: string;
    onSelectFilter: (filter: string) => void;
}

export interface Project {
    img: string;
    category: string;
}
export interface PortfolioState {
    selectedFilter: string;
    projects: Project[];
}

export interface Product {
    id?: number;
    name: string;
    color: string;
    price: number;
    img: string;
}

export interface StoreState {
    products: Product[];
    viewType: 'list' | 'cards';
}

export interface ShopItemProps {
    product: Product;
}
export interface ShopCardProps {
    product: Product;
}
export interface IconSwitchProps {
    icon: string;
    onSwitch: () => void;
}

export interface ListViewProps {
    items: Product[];
}
