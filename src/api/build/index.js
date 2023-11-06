"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cards_1 = __importDefault(require("./routes/cards"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware
const PORT = 3000;
app.get('/test', (req, res) => {
    console.log("hello world");
    res.send('V 1.1');
});
app.use('/api/cards', cards_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
