import React from 'react';
import { Icon } from 'antd';
export class article1 extends React.Component {
 render() {
   return (
     <div className="main">
          <a href="../">back</a>
          <h1>Hello: A Geo-index and Image Recognition Based Social Network</h1>
          <br/>
          <p align="left" className="para">
              <Icon type="pushpin" />Built a web service in Go to handle posts and deployed to GKE (Google Kubernetes Cloud) for better scaling.<br/>
              <Icon type="pushpin" />Used ElasticSearch on GCE to store those posts and enable geo-location based search for posts nearby.<br/>
              <Icon type="pushpin" />Used BigTable to backup those posts with images in the posts stored in GCS (Google Cloud Storage) bucket.<br/>
              <Icon type="pushpin" />Utilized Google Dataflow to implement a weekly dump of posts to BigQuery for offline analysis.<br/>
              <Icon type="pushpin" />Utilized Google Cloud ML API and Tensorflow to train a face detection model and integrate with the Go service.<br/>
          </p>
          <br/>
     </div>
   );
 }
}
