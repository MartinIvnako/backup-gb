export function RemoveAccents(text) {
  let sdiak = "áäčďéěíĺľňóôőöŕšťúůűüýřžÁÄČĎÉĚÍĹĽŇÓÔŐÖŔŠŤÚŮŰÜÝŘŽ";
  let bdiak = "aacdeeillnoooorstuuuuyrzAACDEEILLNOOOORSTUUUUYRZ";

  let tx = "";
  let txt = text;
  for (let p = 0; p < txt.length; p++) {
    if (sdiak.indexOf(txt.charAt(p)) != -1)
      tx += bdiak.charAt(sdiak.indexOf(txt.charAt(p)));
    else tx += txt.charAt(p);
  }

  return tx;
}
