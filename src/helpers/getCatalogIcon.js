import bollards from "/images/icon-catalog-1.png";
import chairs from "/images/icon-catalog-2.png";
import tables from "/images/icon-catalog-3.png";
import poufsAndBanquettes from "/images/icon-catalog-4.png";
import beds from "/images/icon-catalog-5.png";
import sofas from "/images/icon-catalog-6.png";
import shelves from "/images/icon-catalog-7.png";
import racks from "/images/icon-catalog-8.png";

export const getCatalogIcon = (index) => {
  const catalogIcon = [
    bollards,
    chairs,
    tables,
    poufsAndBanquettes,
    beds,
    sofas,
    shelves,
    racks
  ];

  return catalogIcon[index];
};
