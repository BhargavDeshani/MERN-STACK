export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Assuming your backend runs on port 5000
    }
  }
})

