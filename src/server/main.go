package main
import (
"fmt"
"github.com/julienschmidt/httprouter"
"net/http"
"github.com/rs/cors"
"log"
"strconv"
)
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
fmt.Fprint(w, "Welcome!\n")
}
func Converter(i int)(int){
	return i
}
func Sequence(w http.ResponseWriter, r *http.Request, ps httprouter.Params)(int){
	iterations, err := strconv.Atoi(ps.ByName("iterations"))
	sendBack := Converter(iterations)
	return sendBack
}
func main() {
router := httprouter.New()
handler := cors.Default().Handler(router)
router.GET("/api", Index)
router.GET("/api/sequence/:iterations", Sequence)
log.Fatal(http.ListenAndServe(":8080", handler))
}