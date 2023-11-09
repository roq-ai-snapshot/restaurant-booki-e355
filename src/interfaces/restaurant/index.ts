import { MenuInterface } from 'interfaces/menu';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  menu?: MenuInterface[];
  table?: TableInterface[];
  user?: UserInterface[];

  _count?: {
    menu?: number;
    table?: number;
    user?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
}
