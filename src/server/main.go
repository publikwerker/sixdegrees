package main
import (
"fmt"
"github.com/julienschmidt/httprouter"
"net/http"
"log"
)
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
fmt.Fprint(w, "Welcome!\n")
}
func Hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
fmt.Fprintf(w, "hello, %s!\n", ps.ByName("name"))
}
func Fibonacci(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, "Let's number!\n")
	}
func main() {
router := httprouter.New()
router.GET("/api", Index)
router.GET("/api/fibonacci", Fibonacci)
router.GET("/api/hello/:name", Hello)
log.Fatal(http.ListenAndServe(":8080", router))
}