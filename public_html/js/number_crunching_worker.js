var n = 1;
search: while (true) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
	if (n % i == 0)
	    continue search;
    }
    // found a prime!
    postMessage(n);  // send mesage to client or parent
}/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


