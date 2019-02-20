const Attr = {
    setAttributes: (el, attrs) => {
        const keys = Object.keys(attrs);
        for (let i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            el.setAttribute(key, attrs[key]);
        }
    }
}


export default Attr;