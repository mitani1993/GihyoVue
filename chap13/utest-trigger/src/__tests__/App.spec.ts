import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe(
  "App.vueのテスト",
  () => {
    test(
      "初期状態(隠し領域非表示)のテスト",
      () => {
        const wrapper = mount(App);
        const actual = wrapper.find(`[data-testid="invisible"]`).exists();
        const expected = false;
        expect(actual).toBe(expected);
      }
    );
  }
);
