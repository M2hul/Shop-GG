// User Types
export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'buyer' | 'seller' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  bio?: string;
  location?: string;
  phone?: string;
  socialLinks?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// Product Types
export interface Product {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  tags: string[];
  images: string[];
  inventory: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    weight: number;
    unit: 'cm' | 'in';
  };
  materials: string[];
  customizable: boolean;
  customizationOptions?: string[];
  shippingInfo: {
    freeShipping: boolean;
    shippingCost?: number;
    processingTime: string;
    shippingMethods: string[];
  };
  status: 'active' | 'inactive' | 'sold' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

// Order Types
export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  products: OrderProduct[];
  totalAmount: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: string;
  shippingAddress: Address;
  billingAddress: Address;
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
  customizations?: Record<string, string>;
}

// Address Type
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  buyerId: string;
  orderId: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  description: string;
  parentId?: string;
  imageUrl?: string;
  active: boolean;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Authentication Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  role: 'buyer' | 'seller';
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// Search and Filter Types
export interface ProductFilters {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  materials?: string[];
  customizable?: boolean;
  freeShipping?: boolean;
  location?: string;
  sortBy?: 'price' | 'createdAt' | 'rating' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchRequest {
  query?: string;
  filters?: ProductFilters;
  page?: number;
  limit?: number;
}