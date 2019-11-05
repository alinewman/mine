import { Rights } from './rights';

export interface Payment extends Rights {
    id;
    name;
    globalRights;
    grantRight;
    checkable;
}
