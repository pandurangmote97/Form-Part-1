export class Forms {
  private _viewStr = '';
  private _data: FormData = null;
  private _viewContainer = null;
  private controls: Array<FormControl>;
  public setView(container: HTMLElement, view: string): void {
    this._viewStr = view;
    this._viewContainer = container;
  }
  public setData(data: FormData): void {
    this._data = data;
  }
  public getData(): FormData {
    return JSON.parse(JSON.stringify(this._data));
  }
  public run() {
    //View Init start
    this.renderView();
    //View Init Complete

    //Content init start

    //content init complete
  }
  private renderView() {
    this._viewContainer.innerHTML = this._viewStr;
    for (const fc of Object.keys(this._data.formControls)) {
      const el = this.getElement(fc);
      const o = this._data.formControls[fc];
      this._data.formControls[fc].nativeEl = el;
    }
  }
  private getElement(selector: string) {}
  public destroy() {}
}

export class FormData {
  _id = null;
  selectorProp = '';
  dataProp = '';
  formulaProp = '';
  valueProp = '';
  private _data: Array<any> = [];
  get data() {
    return this._data;
  }
  private _fcd = {};
  get formControls() {
    return this._fcd;
  }
  mapData(data: Array<any>) {
    this._data = JSON.parse(JSON.stringify(data));
    for (let i = 0, len = this._data.length; i < len; i++) {
      const d = this._data[i];
      // console.log(d,this);
      if (!this._fcd[d[this.dataProp]]) {
        // console.log(this._fcd);
        this._fcd[d[this.dataProp]] = new FormControl();
        this._fcd[d[this.dataProp]].obj = d;
      }
    }
  }

  // updateFormConrolReferencees(key: string, fc: FormControl) {}
}

export class FormControl {
  // constructor(_ob: any) {
  //   this.obj = _ob;
  // }
  private nativeEl: HTMLElement;
  public obj: any;
  get val() {
    // if (this.nativeEl.tagName == 'INPUT') {
    //   return this.nativeEl['value'];
    // } else if (this.nativeEl.tagName == 'SELECT') {
    //   return this.nativeEl['options'][this.nativeEl['selectedIndex']].value;
    // }
    return this.nativeEl['value'];
  }
  set val(val: any) {
    this.nativeEl['value'] = val;
  }
}
