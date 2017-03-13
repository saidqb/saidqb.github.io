/*
--- Example
#html
<a id='autoid'>hii</a>
#js
window.setTimeout('clickit(data1,data2)',1000);
*/
window.clickit = function(data1,data2){
var paths = [
"57669805", "b432f5f5", "6bdecf46", "ed4e1bac", "6bc66d80", "54a7686c", "b6f99fde", "67b2743f", "71d44ff4", "3bd2c153", "72a2a9f8", "91e5a37d", "06f7fc7c", "2f96906e", "b9ea84f2", "9a8d3d6a", "14196516", "6f2607e3", "6b1174b5", "c7906010", "7cd12eec", "551902fd", "a44f0c4f", "cd1cd0e8", "6c7f24d6", "2276184c", "e47ee6d8", "3fa77d33", "c9f137b8", "1912b4cb", "e5af3187", "fdf41f80", "b32a21b5", "5c699d9f", "6c9f71f3", "5fdf2cda", "8adc100c", "f3c98737", "403085b2", "f22c286c", "544da333", "fb91b39f", "54a12eb1", "4d81c2de", "298be9c2", "f0a3649a", "126330cb", "ec53df13", "19dab853", "2400c209", "e7ba8cb9", "d64ed2ed", "dc71cfe6", "eda1c1e0", "80feeb1a", "c2b325f9", "2ecbf8f2", "60672751", "25a3df3a", "daca745c", "b775f318", "836fb17a", "44d8d694", "50a1dfe6", "48d8aaf5", "7bf5d106", "dd381341", "3f7f5a3d", "854fc3c1", "d63741fe", "12866476", "a63800b8", "0f4ce0ba", "cbb03b86", "d30624b4", "7677a65b", "2b38417b", "13d96535", "6b02b81c", "cceedb9a", "96c36d68", "e0e7e25c", "d8b3b688", "467d4552", "9351bef2", "decf7675", "401b66c5", "29358664", "09926e1b", "6b02b81c", "13d96535", "2b38417b", "7677a65b", "d30624b4", "cdc78e89", "9f779f62", "b10d2045", "4006ee72", "01c3094b", "d7ee7201", "8fd5ab39", "d19ac26e", "f3800b928", "01a67a07", "be2760b2", "c8cd2a93", "131f545e", "f760c091", "e7de4dd0", "ca21200d", "ea0c09eb", "4b77e4f1", "d86a65a5", "849bf00f", "e5831364", "e7f24457", "a646b68b", "0c2762a5", "c0aee364", "bb6f7f09", "969fafa6", "941eba26", "b8a309a2", "1f89edb5", "1e52f818", "a65fd879", "742a35d0", "31d296a5", "a290e4bc", "78f9f0ac", "46f720e3", "5182b90e", "8b59d12e", "f61b67b9", "797695e0", "42ae8463", "05a2cd26", "b28a6b89", "8175baa2", "75ffac71", "aecdc487", "3d91685c", "7b69131e", "88dc36a9", "c4148168", "1ae6a4d2", "662b482f", "7dea5772", "c345d3bf", "465b8787", "4809c1dd", "99306ade", "048de2c1", "cceedb9a", "0de2a1e3", "3a7ab534", "66af8bea", "6d015f24", "f7d0db42", "165761b1", "82c33fe5", "4bc238e0", "1f3b89f8", "49263af5", "d44072b3", "8a24930f", "f45ae853", "0a809a58", "6431be9e", "17f1d062", "afaca746", "e8a89d36", "8e8a5c4a", "d5dae470", "ac483e19", "a615276b", "3a908f40", "b2fc383c", "afed25a3", "d37a9e8c", "2e4c4c7a", "1694325a", "92eca0ca", "99936be6", "88a8c144", "7d406021", "e5bc6920", "a8c4ffe0", "5d44b8bc", "90bfc431", "a8661e5d", "4cb5db94", "d8bda983", "f376b501", "bf7cfd97", "9f9d8b4f", "cf2b3e7e", "0dff4c6a", "7cfd1716", "6349fd17", "0a3dfc5d", "aae35113", "103eedf2", "b8a987a3", "91200e49", "ff09aa1d", "0be4dbe2", "64d18b90", "650e56aa", "44f04b01", "f12f87dc", "ad84a254", "ca4ec1a9", "033981f5", "62c51368", "0cfd05b9", "4302c8e4", "7612ade8", "40d965eb", "39ab2ff2", "5e2e1919", "d505343a", "ff53e300", "496a990c", "bd203b36", "9ceaaaf3", "444b0868", "bddc0145", "321293c3", "e92d7663", "f448ce9f", "c9f870f8", "0580f272", "fb8141d7", "bc956093", "66d8d935", "f109ab2f", "f39cb200", "c2b0a99a", "7cad2865", "aff004b0", "40ec48f4", "aebf5303", "cdc78e89"


]; //array of ids
var item = paths[Math.floor(Math.random()*paths.length)]; //random
//http://adf.ly/12677373/banner/
var encrypted = CryptoJS.AES.encrypt( ""+ data2 + item , "safelink4004");
document.getElementById("autoid").href = data1 + encrypted+"" //set id
location.href = document.getElementById("autoid");
}
