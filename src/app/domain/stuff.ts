export class Stuff {

    set parent(value: Stuff) {
        this._data.parent = value;
    }
    get parent(): Stuff | null {
        return this._data.parent;
    }

    private _data: any;      // TODO type this to your data node

    get id() {
        return this._data.id;
    }
    get name() {
        return this._data.name;
    }
    get globalRights() {
        return this._data.globalRights;
    }
    set globalRights(value) {
        this._data.globalRights = value;
    }
    set isOpen(value) {
        this._data.isOpen = value;
    }

    get isOpen() {
        return this._data.isOpen;
    }
    get treeId() {
        return this._data.treeId;
    }
    get grantRight() {
        return this._data.grantRight;
    }
    set grantRight(value) {
        this._data.grantRight = value;
    }
    get registers() {
        return this._data.registers;
    }
    get rights(): Stuff[] {
        return this._data.rights;
    }

    get checked() {
        return this._data.checked;
    }
    set checked(value) {
        this._data.checked = value;

        this.checkParent(value);

        this.checkChildren(value);
    }

    checkParent(value) {
        if (value === true && this.parent) {
            this.parent._data.checked = value;
            this.parent.checkParent(value);
        }
    }

    checkChildren(value) {
        if (this._data.rights) {
            this._data.rights.forEach(right => {
                right._data.checked = value;
                right.checkChildren(value);
            });
        }
    }

    get checkable() {
        return this._data.checkable;
    }
    set checkable(value) {
        this._data.checkable = value;
    }

    constructor(data) {
        this._data = data || {};
        this.parseData(data);
    }

    parseData(data) {
        const $this = this;
        if (this._data.rights && Array.isArray(this._data.rights)) {
            this._data.rights = this._data.rights.map(child => {
                child = new Stuff(child);
                child.parent = $this;
                return child;
            });
        }
    }
}
