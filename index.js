const { Namer } = require("@parcel/plugin");

exports.default = new Namer({
  name({ bundle }) {
    let name = bundle.getMainEntry().filePath.split("/").at(-1).split(".")[0];
    name += "." + bundle.hashReference;
    return name + "." + bundle.type;
  },
});
