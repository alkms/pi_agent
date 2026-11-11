import { describe, expect, it } from "vitest";
import { getToolAssetName } from "../src/utils/tools-manager.ts";

describe("getToolAssetName", () => {
	it("resolves fd asset names across architectures on Linux", () => {
		expect(getToolAssetName("fd", "10.2.0", "linux", "x64")).toBe("fd-v10.2.0-x86_64-unknown-linux-gnu.tar.gz");
		expect(getToolAssetName("fd", "10.2.0", "linux", "arm64")).toBe("fd-v10.2.0-aarch64-unknown-linux-gnu.tar.gz");
		expect(getToolAssetName("fd", "10.2.0", "linux", "arm")).toBe("fd-v10.2.0-arm-unknown-linux-gnueabihf.tar.gz");
		expect(getToolAssetName("fd", "10.2.0", "linux", "armv7l")).toBe("fd-v10.2.0-arm-unknown-linux-gnueabihf.tar.gz");
	});

	it("resolves ripgrep asset names across architectures on Linux", () => {
		expect(getToolAssetName("rg", "14.1.0", "linux", "x64")).toBe("ripgrep-14.1.0-x86_64-unknown-linux-musl.tar.gz");
		expect(getToolAssetName("rg", "14.1.0", "linux", "arm64")).toBe(
			"ripgrep-14.1.0-aarch64-unknown-linux-gnu.tar.gz",
		);
		expect(getToolAssetName("rg", "14.1.0", "linux", "arm")).toBe(
			"ripgrep-14.1.0-armv7-unknown-linux-gnueabihf.tar.gz",
		);
		expect(getToolAssetName("rg", "14.1.0", "linux", "armv7l")).toBe(
			"ripgrep-14.1.0-armv7-unknown-linux-gnueabihf.tar.gz",
		);
	});
});
