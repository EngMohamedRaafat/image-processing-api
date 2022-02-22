# Image Processing API

This project aims to create an API with express to manipulate the size of an image located on in `assets/images/full` folder via URL.

For this project, There are _two_ use cases:

1. **Resize Image**: Resize an image with the provided dimensions (`width` & `height`) parameters, then save it to `assets/images/thumb` folder.
2. **Reload Cached Image**: Reload image from `assets/images/thumb` folder when the URL hit with the same parameters as before.

## Getting Started

### Application Setup

1. #### Install Dependencies:
       npm install
2. #### Build App:
       npm run build
3. #### Start Server:

   - For **Dev**: run `npm run start` or `npm start`

     or

   - For **Prod**: run `node dist/index.js`

   The server will listen on port 3000

4. #### Open Browser and Navigate to [localhost:3000](http://localhost:3000):

   **Endpoint**: `GET /api/images?filename=[filename]&width=[width]&height=[height]`

   **Example**: [localhost:3000/api/images?filename=fjord&width=200&height=300](http://localhost:3000/api/images?filename=fjord&width=200&height=300)

### Testing

- #### Build & Test:
      npm run test
- #### Test Only:
      npm run jasmine

### Styling

- #### Code Formatting:
      npm run format
- #### Linting:
      npm run lint
