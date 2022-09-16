export default function LoadingIndicator() {
  return (
    <div class="shimmer-wrapper">
      <div class="shimmer-circle shimmer-circle-md shimmer-animate"></div>
      <div class="shimmer-line shimmer-line-br shimmer-line-40 shimmer-animate"></div>
      <div class="divider">
        <hr />
      </div>
      <div class="shimmer-line shimmer-line-br shimmer-line-60 shimmer-animate"></div>
      <div class="shimmer-line shimmer-line-br shimmer-line-80 shimmer-animate"></div>
      <div class="shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"></div>
    </div>
  );
}
