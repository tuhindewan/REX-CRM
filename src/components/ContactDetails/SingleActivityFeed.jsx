import CreateNoteIconSm from "../Icons/CreateNoteIconSm";

export default function SingleActivityFeed(props) {
  return (
    <>
      <div className="single-activity-feed">
        {/* <h4 className="activity-date">August 23rd</h4> */}

        <div className="feed-wrapper">
          {/* <div className="single-feed">
                        <span className="icon">
                            <PlusIconMedium />
                        </span>
                        <div className="description"> <b>Added</b> by John via Import from Mailchimp</div>
                        <span className="feed-date">2 hours age</span>
                    </div>

                    <div className="single-feed">
                        <span className="icon icon-danger">
                            <CrossIcon />
                        </span>
                        <div className="description"> <b>Unsubscribed</b> by John via admin action</div>
                        <span className="feed-date">3 hours age</span>
                    </div> */}

          
            {props.notes?.map((note) => {
              return (
                <>
                  <div className="single-feed" key={note.id}>
                    <span className="icon icon-warning">
                      <CreateNoteIconSm />
                    </span>
                    <div className="description">
                      <b>{note.created_by} wrote a note:</b>
                      <div className="writen-note">
                        {note.description?.length > 200 ? note.description.substring(0, 200) + "..." : note.description}
                      </div>
                    </div>
                    <span className="feed-date">
                      {note.created_at} ago
                      <button className="note-edit" title="Edit Note">
                        Edit
                      </button>
                      <button className="note-delete" title="Detele Note">
                        Delete
                      </button>
                    </span>
                  </div>
                </>
              );
            })}

          
        </div>
      </div>
    </>
  );
}
