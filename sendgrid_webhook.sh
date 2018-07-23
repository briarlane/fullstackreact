function localtunnel {
  lt -p 5000 -s lk345345mnbmnbmb98987
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
