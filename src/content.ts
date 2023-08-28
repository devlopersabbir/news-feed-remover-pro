import browser from "webextension-polyfill";

class Main {
  public static facebook() {
    const facebookElement: HTMLDivElement = document.getElementsByClassName(
      "x1hc1fzr x1unhpq9 x6o7n8i"
    )[0] as HTMLDivElement;

    if (facebookElement) {
      facebookElement.style.display = "none";
    } else {
      console.log("not found!");
    }
  }

  public static instagram() {}
}

Main.facebook();
