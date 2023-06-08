"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const _1 = __importDefault(require("."));
const features = ["enabledFeature"];
describe("react-feature-flipping", () => {
    beforeEach(() => {
        (0, react_1.render)(react_2.default.createElement(_1.default.Provider, { features: features },
            react_2.default.createElement("main", null,
                react_2.default.createElement("h1", null, "Main Title"),
                react_2.default.createElement(_1.default.Toggle, { feature: "enabledFeature" },
                    react_2.default.createElement("h2", null, "Enabled Feature")),
                react_2.default.createElement(_1.default.Toggle, { feature: "disabledFeature" },
                    react_2.default.createElement("h2", null, "Disabled Feature")))));
    });
    it("displays main title", () => {
        expect(react_1.screen.getByRole("heading", { level: 1, name: "Main Title" })).toBeInTheDocument();
    });
    it("displays enabled feature", () => {
        expect(react_1.screen.getByRole("heading", { level: 2, name: "Enabled Feature" })).toBeInTheDocument();
    });
    it("does not display disabled feature", () => {
        expect(react_1.screen.queryByRole("heading", { level: 2, name: "Disabled Feature" })).not.toBeInTheDocument();
    });
});
