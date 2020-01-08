/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function loopingATriangle() {
  let result = "";
  for (let i = 1; i < 8; i++) {
    result = result + "#";
    console.log(result);
  }
}

loopingATriangle();
