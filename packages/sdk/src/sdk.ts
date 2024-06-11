class EnpageSDK {
  goToSection(section: string | number) {}
  nextSection() {
    console.log("next section");
  }
  prevSection() {
    console.log("prev section");
  }
  getContext() {
    return window._enpageCtx;
  }
}

export const enpage = new EnpageSDK();