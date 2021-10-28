import React from "react";
import { Route } from "react-router-dom";

// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionOverview from "../../components/collections-overview/collections-overviews.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
